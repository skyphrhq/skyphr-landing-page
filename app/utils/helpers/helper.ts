export const CreateScrollTrigger = ({
  trigger,
  start = "top 80%",
  end = "bottom top",
  markers = false,
}: {
  trigger: Element | string;
  start?: string;
  end?: string;
  markers?: boolean;
}) => ({
  trigger,
  start,
  end,
  markers,
});
