import { iconTitle } from "../types"

interface SVGViewerProps {
    iconTitle: iconTitle
    boldoIconGreen?: boolean
    boldoIconBlue?: boolean
    arrowRightColor?: string
}

export default function SVGViewer({ iconTitle, boldoIconGreen, arrowRightColor, boldoIconBlue }: SVGViewerProps) {

    const doc = document.querySelector(':root');
    const computedStyle = getComputedStyle(doc as Element);

    const computedArrowColor = arrowRightColor ? arrowRightColor : '#0A2640'
    const computedBoldoIcon = () => boldoIconGreen ? computedStyle.getPropertyValue('--template-green') : boldoIconBlue ? computedStyle.getPropertyValue('--template-deep-blue') : 'white';

  return (
    <span>
      {
        iconTitle === 'boldo-icon' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="31" viewBox="0 0 24 35" fill="none">
        <path d="M0.382355 16.45H14.7C19.5833 16.45 23.5421 20.4088 23.5421 25.2921V25.2921C23.5421 30.1755 19.5833 34.1343 14.7 34.1343H0.382355V16.45Z" fill={computedBoldoIcon()}/>
        <path d="M0.382355 0.976379H9.86189C13.5244 0.976379 16.4935 3.94544 16.4935 7.60796V7.60796C16.4935 11.2705 13.5244 14.2395 9.86189 14.2395H0.382355V0.976379Z" fill={computedBoldoIcon()}/>
        </svg>
      }
        {
        iconTitle === 'arrow-right' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
        <path d="M5 14H19" stroke={computedArrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7L19 14L12 21" stroke={computedArrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
      {
        iconTitle === 'caret-down' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#0A2640"/>
        <path d="M8 12L14 18L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
  
    </span>
  )
}
