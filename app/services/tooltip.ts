import type { Loop } from "~/assets/loops";

interface Tooltip {
  visible: boolean;
  x: number;
  y: number;
  text: string;
}

export const initialTooltip = { visible: false, x: 0, y: 0, text: '' };

export const show = (tooltip: Tooltip, loop: Loop) => {
  tooltip.visible = true
  tooltip.text = `${loop.name} – ${loop.length} km`
}

export const hide = (tooltip: Tooltip) => {
  tooltip.visible = false
}

export const moveTooltip = (tooltip: Tooltip, e: MouseEvent) => {
  tooltip.x = e.clientX + 10
  tooltip.y = e.clientY + 10
}
