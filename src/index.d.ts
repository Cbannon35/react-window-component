declare module "react-window-comp" {
  type WindowProps = {
    maxw?: number;
    minw?: number;
    maxh?: number;
    minh?: number;
    startx?: number;
    starty?: number;
    initialWidth?: number;
    initialHeight?: number;
    lockAspectRatio?: boolean;
    title?: string;
    bgcolor?: string;
    display?: () => JSX.Element;
  };

  const Window: (props: WindowProps) => JSX.Element;

  // export default Window;
}
