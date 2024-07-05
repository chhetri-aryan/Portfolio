import { useSpring, useTransform } from "framer-motion";

export function useSmoothTransform(value, springOptions, transformer) {
  return useSpring(useTransform(value, transformer), springOptions);
}
