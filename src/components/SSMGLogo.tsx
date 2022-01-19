import { useColorModeValue } from '@chakra-ui/react'

interface Props {
  size?: string | number | undefined
  fill?: string | undefined
}

const SSMGLogo = ({ size, fill }: Props): JSX.Element => {
  const colorBasedOnColorMode = useColorModeValue('#000000', '#ffffff')

  return (
    <svg
      height={size || '100%'}
      version="1.1"
      width={size || '100%'}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      viewBox="0 0 1024 1024"
      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="1"
        fill={fill || colorBasedOnColorMode}
        d="M487.257+725.555C504.006+722.51+512.381+714.008+512.381+700.051C512.381+686.093+507.94+670.358+499.057+652.848C490.175+635.337+477.105+618.714+459.848+602.98C414.676+562.375+353.515+542.073+276.366+542.073C238.299+542.073+202.77+548.417+169.778+561.106C134.757+543.342+106.841+515.172+86.0312+476.598C65.2213+438.023+54.8164+396.403+54.8164+351.738C54.8164+235+103.542+144.908+200.993+81.4632C284.741+27.1544+388.029+0+510.858+0C602.219+0+679.114+9.77051+741.543+29.3115C803.973+48.8525+854.983+73.8498+894.572+104.303C906.246+137.802+912.083+172.57+912.083+208.607C912.083+244.643+907.261+277.381+897.618+306.819C887.974+336.258+874.016+359.859+855.744+377.624C838.487+364.935+807.272+351.992+762.1+338.796C716.927+325.599+675.815+319.001+638.763+319.001C601.711+319.001+576.968+321.285+564.532+325.853C552.097+330.421+545.88+337.527+545.88+347.17C545.88+351.738+546.641+356.053+548.164+360.113C565.928+355.545+588.768+353.261+616.684+353.261C715.658+353.261+796.36+376.609+858.79+423.304C932.386+479.136+969.184+562.883+969.184+674.546C969.184+773.012+929.34+854.729+849.654+919.697C763.369+989.232+647.391+1024+501.722+1024C421.528+1024+351.992+1018.04+293.115+1006.11C234.238+994.181+176.884+973.244+121.053+943.298C82.9859+887.974+63.9524+831.762+63.9524+774.662C63.9524+717.561+83.4934+670.231+122.575+632.672C161.657+595.113+209.749+576.333+266.849+576.333C323.949+576.333+370.645+588.007+406.935+611.355C443.226+634.702+470+672.769+487.257+725.555Z"
      />
    </svg>
  )
}

export default SSMGLogo