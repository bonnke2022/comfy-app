import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

export type FormProps = {
  name: string;
  control: Control<any>;
  label: string;
  type: string;
  defaultValue: string;
};

const FormInput = ({ name, defaultValue, control, label, type }: FormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="form-control">
          <FormLabel className="label-text capitalize">{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              className={`input input-bordered text-secondary input-sm`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
