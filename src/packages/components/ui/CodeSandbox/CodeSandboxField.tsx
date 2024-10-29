"use client";
import { Box } from "@/packages/components/ui/Box";
import { useFormField } from "@/packages/components/ui/Form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/packages/components/ui/Tooltip";
import { Ref, forwardRef } from "react";

const CodeSandboxField = forwardRef(
  (
    props: {
      name: string;
      label: string;
      description: string;
      placeholder: string;
      onChange(e: any): void;
      value: string;
      onBlur(): void;
    },
    ref: Ref<HTMLInputElement>,
  ) => {
    const { error } = useFormField();

    const { name, onChange, value, onBlur, label, placeholder, description } =
      props;

    return (
      <Box className="flex h-12 w-full items-center border-b" ref={ref}>
        <Box className="flex h-full w-32 items-center px-4 underline decoration-dashed">
          <Tooltip>
            <TooltipTrigger>{name}</TooltipTrigger>
            <TooltipContent>{description}</TooltipContent>
          </Tooltip>
        </Box>

        <Box
          as="input"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="h-full w-full bg-transparent px-3 outline-none focus:bg-background-secondary"
          placeholder={placeholder}
        />
      </Box>
    );
  },
);

CodeSandboxField.displayName = "CodeSandboxField";

export { CodeSandboxField };
