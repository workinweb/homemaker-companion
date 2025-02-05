import React from "react";

interface ExcelViewerProps {
    file: string;
    title?: string;
}

export function ExcelViewer({ file, title }: ExcelViewerProps) {
    return (
        <div className="w-full overflow-hidden">
         
            <div className="h-[600px] w-full">
                <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                        `${file}`,
                    )}&ui=false&rs=false&wdHideGridlines=true&wdHideHeaders=true&wdDownloadButton=false&wdToolbar=false&wdInlineEdit=true&wdbinoculars=false`}
                    className="h-full w-full border-none"
                    title={title}
                />
            </div>
        </div>
    );
}
