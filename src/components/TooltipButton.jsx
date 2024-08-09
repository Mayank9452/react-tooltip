import styles from '../styles/Tooltip.module.css'
import { Tooltip } from 'react-tooltip'
function TooltipButton({ direction }) {
    console.log(direction);

    return (
        <>
            <button className={styles.buttonHover}
                id="not-clickable"
                data-tip
                data-for="hoverTooltip"
            >Hang Over Me</button>
            {/* <a >◕‿‿◕</a> */}
            <Tooltip anchorSelect="#not-clickable" className = {styles.hoverBackground} place={direction}>
                Thanks for hovering me
            </Tooltip>
        </>
    )
}
export default TooltipButton