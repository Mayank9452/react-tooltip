import { useState } from 'react';
import styles from '../styles/Tooltip.module.css'
import TooltipButton from './TooltipButton';
function Tooltip() {
    const [option, setOptions] = useState()
    console.log(option)
    return (
        <>


            <div className={styles.mainContent}>
                <h1 className={styles.heading}>ToolTip</h1>
                <form className={styles.formContent}>
                    <label htmlFor="direction">Choose Direction : </label>
                    <select id="direction" name="direction" value={option} onChange={(e) => setOptions(e.target.value)}>
                        <option value="">select </option>
                        <option value="top">Top</option>
                        <option value="bottom">Down</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                    <br />
                </form>

                <div className={styles.toolTipButton}>
                    <TooltipButton direction={option} />
                </div>
            </div>



        </>
    )
}
export default Tooltip;