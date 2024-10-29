import { Box } from "@/packages/components/ui/Box";
import { ForwardedRef, ReactNode, forwardRef } from "react";

type AvatarProps = {
  initial?: string;
};

export const Avatar = forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { initial, ...rest } = props;

    return (
      <Box
        ref={ref}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-semibold uppercase text-white"
        {...rest}
      >
        {initial}
      </Box>
    );
  },
);

Avatar.displayName = "Avatar";
