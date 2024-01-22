import { ErrorBoundary } from "@/components/ui/error-boundary";
import type { ComponentType } from "react";

export const hoc = function <SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Component: ComponentType<HP & SP>,
  displayName?: string
) {
  Component.displayName = displayName || "HocWrapper";
  const HocResult: any = (props: SP) => {
    try {
      const hookProps = hook(props) || ({} as any);
      return (
        <ErrorBoundary fallback={<p>Oops! Something went wrong!</p>}>
          <Component {...hookProps} {...props} />
        </ErrorBoundary>
      );
    } catch (error) {
      console.log("HocError", error);
      return <p>Oops! Something went wrong!</p>;
    }
  };

  HocResult.Original = Component;
  HocResult.hook = hook;

  return HocResult as ComponentType<Partial<HP> & Partial<SP>> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};
