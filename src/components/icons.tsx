import type { SVGProps } from 'react';

export function AcnLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="130"
      height="32"
      viewBox="0 0 130 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.0625 25.5V7H24.3281V17.1406L30.1406 7H35.4375L28.625 18.25L35.75 25.5H30.25L24.3281 19.1406V25.5H19.0625Z"
        className="fill-primary"
      />
      <path
        d="M40.7594 7H55.1969C58.3781 7 60.3062 7.53125 61.0281 8.59375C61.75 9.65625 62.1156 11.2344 62.1156 13.3438C62.1156 15.5 61.7312 17.0625 60.9812 18.0625C60.2312 19.0469 58.3781 19.5312 55.4031 19.5312H46.0094V25.5H40.7594V7ZM46.0094 15.5469H54.4906C55.9906 15.5469 56.8875 15.2188 57.1812 14.5625C57.4906 13.8906 57.6437 13.0156 57.6437 11.9375C57.6437 10.8594 57.4906 10.0312 57.1812 9.45312C56.8875 8.85938 55.9906 8.5625 54.4906 8.5625H46.0094V15.5469Z"
        className="fill-primary"
      />
      <path
        d="M68.7458 7H74.0114V25.5H68.7458V7Z"
        className="fill-primary"
      />
      <text
        x="78"
        y="25"
        className="font-headline text-[1.5rem] font-bold fill-foreground"
      >
        Máquinas
      </text>
    </svg>
  );
}
