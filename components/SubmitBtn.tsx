import { Button } from "./ui/button";

const SubmitBtn = ({ text }: { text: string }) => {
  return (
    <Button type="submit" className="btn btn-primary btn-block">
      {text ? text : "submit"}
    </Button>
  );
};

export default SubmitBtn;
