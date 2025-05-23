import { SheetTitle } from "@lens/base/components/ui/sheet";
import { ArrowLeft } from "lucide-react";

const FieldsSheetTitle = ({ callback }: { callback?: any }) => {
  return (
    <SheetTitle asChild>
      <div className="flex gap-x-2 items-center">
        <ArrowLeft
          size={18}
          className="text-[var(--gray-9)] cursor-pointer"
          onClick={() => {
            callback && callback("default");
          }}
        />
        Fields
      </div>
    </SheetTitle>
  );
};

export default FieldsSheetTitle;
