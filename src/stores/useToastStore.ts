import { create } from "zustand";
import { toast } from "sonner";

export const useToastStore = create(() => ({
  notify: (type = "success", message: string, desc: string) => {
    if (type == "success")
      toast.success(message, {
        description: desc,
      });
    if (type == "error")
      toast.error(message, {
        description: desc,
      });
    if (type == "info")
      toast.info(message, {
        description: desc,
      });
  },
}));
