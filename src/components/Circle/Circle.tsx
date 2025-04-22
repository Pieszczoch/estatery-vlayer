import { FC } from "react";

interface Props {
  percentage: number;
  circleWidth: number;
  className?: string;
}

const Circle: FC<Props> = ({ percentage, circleWidth, className }) => {
  const radius = 35;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      className={className}
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="2px"
        r={radius}
        className="fill-none stroke-base-200"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="2px"
        r={radius}
        className="fill-none stroke-secondary-300"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
      />
    </svg>
  );
};

export { Circle };
