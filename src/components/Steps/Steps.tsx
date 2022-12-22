import React from "react";
import Step, { StepStatus } from "../Step/Step";
import './Steps.css';

interface Props {
  steps: IStep[];
  current: number;
}

interface IStep {
  id: string;
  title: string;
  status: StepStatus;
}

const Steps = (props: Props) => {
  const { steps, current } = props;
  const currentSteps = steps.map((item, index) => {
    if (index < current) item.status = StepStatus.Done;
    if (index === current) item.status = StepStatus.Active;
    if (index > current) item.status = StepStatus.Inactive;
    return item;
  });
  return (
    <>
      <div className='steps'>
        {currentSteps.map(({ id, title, status }) =>
          <Step key={id} title={title} status={status} />
        )}
      </div>
    </>
  );
};

export default Steps;