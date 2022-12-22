import React from "react";
import './Step.css';
import classNames from 'classnames';

export enum StepStatus {
  Done,
  Active,
  Inactive
}

interface Props {
  title: string;
  status: StepStatus;
}

const Step = (props: Props) => {

  const { title, status } = props;

  const point = classNames(
    'step__point',
    { 'point-done': status === StepStatus.Done },
    { 'point-active': status === StepStatus.Active },
    { 'point-inactive': status === StepStatus.Inactive },
  )

  const preline = classNames(
    'step__preline',
    { 'preline-active': status === StepStatus.Done },
    { 'preline-active': status === StepStatus.Active },
  )

  const postline = classNames(
    'step__postline',
    { 'postline-active': status === StepStatus.Done },
  )

  return (
    <div className='step'>
      <div className='step__title'>{title}</div>
      <div className='step__content'>
        <div className={preline}></div>
        <div className={point}></div>
        <div className={postline}></div>
      </div>
    </div>
  );
};

export default Step;