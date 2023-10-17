import Progress from "./Progress";

interface Props {
  progress: number;
  handleNextStep: () => void;
}

const Completion = ({ progress }: Props) => {
  return (
    <div>
      <Progress progress={progress} />
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Payment Successfull
      </h1>
      <div className="my-4">
        <h3>Data Submited Successfully To Server</h3>
      </div>
    </div>
  );
};

export default Completion;
