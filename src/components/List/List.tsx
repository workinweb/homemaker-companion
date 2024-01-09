"use client";

import React from "react";
import { FiCheckSquare } from "react-icons/fi";

type ListProps = {
  title: string;
  list: Array<string>;
};

export function List({ title, list }: ListProps) {
  return (
    <div>
      <h2 className="p-8 text-center text-2xl font-bold text-primary">
        {title}
      </h2>

      <div className="flex flex-col gap-2 border-2 border-solid p-8">
        {list.map((listName) => {
          return (
            <div className="flex items-center gap-2">
              <FiCheckSquare className="h-8 w-8 text-primary" />
              <p className="text-xl">{listName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
