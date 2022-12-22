import React, { useState } from "react";
import { StepStatus } from "../Step/Step";
import Steps from "../Steps/Steps";
import './NextForm.css';

interface Props {
  steps: IStep[];
}

interface IStep {
  id: string;
  title: string;
  status: StepStatus;
}

const NextForm = (props: Props) => {
  const { steps } = props;
  const [current, setCurrent] = useState(0);

  const handlerPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const handlerNext = () => {
    if (current < steps.length) {
      setCurrent(current + 1);
    }
  }

  return (
    <form action='#' className='next-form'>
      <Steps steps={steps} current={current} />
      <div className='nextform-btn-group'>
        <input
          type='button'
          className='nextform-btn-group__btn'
          onClick={handlerPrev}
          value='prev'
          disabled={current === 0}
        />
        <input
          type='button'
          className='nextform-btn-group__btn'
          onClick={handlerNext}
          value='next'
          disabled={current === steps.length}
        />
      </div>
    </form>
  );
};

export default NextForm;