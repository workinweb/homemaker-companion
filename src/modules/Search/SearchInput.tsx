"use client";

import React from "react";
import { SearchIcon } from "@nextui-org/shared-icons";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import dictionary, {
    type DictionaryResults,
    type DicType,
    type TextType,
} from "~/dictionary/dictionaryLink";
import Link from "next/link";

export function SearchInput() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [foundSearch, setFoundSearch] = React.useState<
        DictionaryResults[] | []
    >([]);
    const [searchDone, setSearchDone] = React.useState<boolean>(false);

    const handleOpenAndSearch = () => {
        onOpen();
        handleSearch();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleOpenAndSearch();
        }
    };

    const handleChangeQuery = (e: string) => {
        setFoundSearch([]);
        setSearchQuery(e);
        setSearchDone(false);
    };

    function extractWords(text: string, trigger: string) {
        // Split the text into words
        const words = text.split(" ");

        // Find the index of the word that contains the trigger
        const index = words.findIndex((word) => word.includes(trigger));

        // Check if the trigger word is in the text
        if (index === -1) {
            return "";
        }

        // Calculate the start and end indices for slicing
        const start = Math.max(0, index - 20);
        const end = Math.min(words.length, index + 21);

        // Extract the words and join them back into a string
        let extracted: string | string[] = words.slice(start, end);

        // Replace the trigger part of each word with the highlighted version
        extracted = extracted.map((word) =>
            word.replace(
                new RegExp(`(${trigger})`, "g"),
                '<span class="text-white bg-primary">$1</span>',
            ),
        );

        // Join the words back into a string
        extracted = extracted.join(" ");

        // Return the extracted words
        return `<p> ${extracted} </p>`;
    }

    const handleSearch = () => {
        setSearchDone(true);

        if (searchQuery) {
            const searchResult: DictionaryResults[] = Object.entries(dictionary)
                .map((dic: [string, DicType]) => {
                    let foundMatch = false;
                    const parts: string[] = [];
                    const htmlParts: string[] = [];

                    Object.entries(dic[1].texts).forEach((text: TextType) => {
                        if (!Array.isArray(text[1])) {
                            if (text[1] && text[1].includes(searchQuery)) {
                                const html = extractWords(text[1], searchQuery);

                                foundMatch = true;
                                parts.push(text[1]);
                                htmlParts.push(html);
                            }
                        } else {
                            text[1].forEach((textArray) => {
                                if (textArray.includes(searchQuery)) {
                                    const html = extractWords(
                                        textArray,
                                        searchQuery,
                                    );

                                    foundMatch = true;
                                    parts.push(textArray);
                                    htmlParts.push(html);
                                }
                            });
                        }
                    });

                    if (foundMatch) {
                        return {
                            section: dic[1].name,
                            link: dic[1].link,
                            parts,
                            htmlParts,
                        };
                    } else {
                        return null;
                    }
                })
                .filter((dic) => dic);

            console.log(searchResult);
            setFoundSearch(searchResult);
        }
    };

    return (
        <>
            <div className="flex w-full gap-0 sm:w-max">
                <Input
                    isClearable
                    size="sm"
                    variant="bordered"
                    fullWidth={true}
                    placeholder="Search..."
                    value={searchQuery}
                    onValueChange={handleChangeQuery}
                    onKeyDown={onKeyDown}
                    classNames={{
                        inputWrapper:
                            "h-[40px] rounded-none rounded-tl-md rounded-bl-md border border-blue-200",
                    }}
                />

                <Button
                    onPress={handleOpenAndSearch}
                    size="md"
                    variant="flat"
                    color="primary"
                    isIconOnly
                    className="rounded-none rounded-br-md rounded-tr-md"
                >
                    <SearchIcon />
                </Button>
            </div>

            <Modal
                size={"full"}
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior={"outside"}
                classNames={{ closeButton: "mr-5" }}
            >
                <ModalContent className="mt-0 h-max py-5  md:px-20">
                    {(onClose) => (
                        <>
                            <ModalHeader></ModalHeader>

                            <ModalBody>
                                <div className="flex w-full flex-col justify-center gap-5">
                                    <div className="max-w-5xl">
                                        <h1 className="text-2xl font-bold">
                                            Search for content in the page
                                        </h1>
                                    </div>

                                    <div className="max-w-5xl">
                                        <div className="flex w-full gap-0">
                                            <Input
                                                isClearable
                                                size="sm"
                                                variant="bordered"
                                                fullWidth={true}
                                                placeholder="Search..."
                                                value={searchQuery}
                                                onValueChange={
                                                    handleChangeQuery
                                                }
                                                onKeyDown={onKeyDown}
                                                classNames={{
                                                    inputWrapper:
                                                        "h-[40px] rounded-none rounded-tl-md rounded-bl-md border border-blue-200",
                                                }}
                                            />
                                            <Button
                                                onPress={handleSearch}
                                                size="md"
                                                variant="flat"
                                                color="primary"
                                                isIconOnly
                                                className="rounded-none rounded-br-md rounded-tr-md"
                                            >
                                                <SearchIcon />
                                            </Button>
                                        </div>

                                        {foundSearch.length > 0 && (
                                            <p className="pb-5 pt-2">
                                                {foundSearch.length} item
                                                {foundSearch.length > 1 &&
                                                    "s"}{" "}
                                                found for "{searchQuery}"
                                            </p>
                                        )}

                                        {foundSearch.length === 0 &&
                                            searchQuery !== "" &&
                                            searchDone && (
                                                <p className="pb-5 pt-5 text-xl font-bold">
                                                    No items found for "
                                                    {searchQuery}"
                                                </p>
                                            )}

                                        {foundSearch.map((f) => {
                                            if (f)
                                                return (
                                                    <div className="py-2">
                                                        <Link
                                                            onClick={onClose}
                                                            className="text-2xl underline underline-offset-4  hover:text-primary"
                                                            href={f.link}
                                                        >
                                                            {f.section}
                                                        </Link>

                                                        {f.htmlParts.map(
                                                            (p) => {
                                                                return (
                                                                    <div
                                                                        className="mt-b-2 mt-2"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: p,
                                                                        }}
                                                                    ></div>
                                                                );
                                                            },
                                                        )}
                                                    </div>
                                                );
                                        })}
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
