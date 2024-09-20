import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="keyb">
            <div className="model">
                <p>Model: {props.model}</p>
                <img src="https://m.media-amazon.com/images/I/61xO2sCLTLS._AC_SL1500_.jpg" alt="" />
                <p>Product Overview - The {props.model} is a high-performance mechanical keyboard designed for gamers, 
                professionals, and everyday users who demand precision and comfort. It features customizable RGB 
                backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
                experience.</p>                
            </div>
            <div className="spec">
                <p>Specifications:</p>
                <ul>
                    <li>Switch Type: {props.switchType}{props.switchClass}</li>
                    <li>Key Layout: {props.keyLayout}</li>
                    <li>Backlighting: {props.backlight}</li>
                    <li>Connectivity: {props.connectivity}</li>
                    <li>Dimensions: {props.dimension}</li>
                    <li>Weight: {props.weight}</li>
                    <li>Cable Length: {props.cableLenght}</li>
                    <li>Additional Features: {props.additional}</li>
                </ul>
            </div>
            <div className="box">
                <p>In the Box:</p>
                <ul>
                    <li>{props.model} Keyboard</li>
                    <li>USB Cable</li>
                    <li>User Manual</li>
                    <li>Keycap Removal Tool</li>
                    <li>Warranty Card</li>
                </ul>`
            </div>

            <div className="features">
                <p>Key Features:</p>
                <p>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors 
                and lighting effects.</p>
                <p>Mechanical Switches: {props.switchType} for a responsive and smooth typing experience.</p>
                <p>Programmable Keys: Assign macros and custom functions to any key with the included software.</p>
                <p>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions</p>
                <p>Dedicated Media Controls: Easily control music and videos with dedicated media keys.</p>
            </div>
           
           <div className="instruct">
                <p>Setup Instructions</p>
                <p>Unboxing:</p>
                <ul>
                    <li>Carefully remove the keyboard and accessories from the box.</li>
                </ul>
                <p>Connecting the Keyboard:</p>
                <ul>
                    <li>Plug the USB cable into an available USB port on your computer</li>
                    <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
                </ul>
           </div>
        
            <div className="install">
            <p>Software Installation (Optional):</p>
                <ul>
                    <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                    <li>Follow the on-screen instructions to install the software</li>
                </ul>
                <p>Keycap Removal and Replacement:</p>
                <ul>
                    <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement</li>
                    <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
                </ul>
            </div>
           
            <div className="use">
                <p>Using the Keyboard</p>
                <p>Basic Typing:</p>
                <ul>
                    <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
                </ul>
                <p>Customizing Backlighting:</p>
                <ul>
                    <li>Press Fn + F9 to cycle through preset lighting effects</li>
                    <li>Use the configuration software to create custom lighting profiles.</li>
                </ul>
                <p>Programming Keys:</p>
            <ul>
                <li>Open the configuration software</li>
                <li>Select the key you want to program</li>
                <li>Assign a macro or function and save your changes.</li>
            </ul>
            </div>

            <div className="troubleshoot">
            <p>Troubleshooting</p>
            <p>Keyboard Not Responding:</p>
            <ul>
                <li>Ensure the USB connection is secure</li>
                <li>Try connecting the keyboard to a different USB port.</li>
                <li>Restart your computer if necessary.</li>
            </ul>
            <p>Backlighting Not Working:</p>
            <ul>
                <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
                <li>Verify that the configuration software is properly installed.</li>
            </ul>
            <p>Key Not Registering:</p>
            <ul>
                <li>Confirm that no physical obstructions are affecting the key.</li>
                <li>Test the key in different applications to determine if the issue is software-related.</li>
            </ul>
            </div>
            
            <div className="maintenance">
                <p>Maintenance and Care</p>
                <p>Cleaning</p>
                <ul>
                    <li>Disconnect the keyboard from the compute</li>
                    <li>Use a soft, dry cloth to clean the surface.</li>
                    <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris</li>
                </ul>
                <p>Storage</p>
                <ul>
                    <li>Store the keyboard in a cool, dry place.</li>
                    <li>Avoid exposure to liquids or extreme temperatures.</li>
                </ul>
            </div>
            
            <div className="warranty">
                <p>Warranty and support</p>
                <ul>
                    <li>Warranty Period: {props.warranty} years from the date of purchase.</li>
                    <li>Customer Support: For assistance, contact customer support via the manufacturer’s website 
                    or call the support hotline at 1-800-555-1234</li>
                </ul>
                <p>Manufacturer’s Website: www.z&zkeybs.com</p>
                Customer Support Email: support@z&Z.com
                <p>Support Hotline: 1-800-555-1234</p>
                <p>“Thank you for choosing the {props.model}. We hope you enjoy your new keyboard! Type Safe!”</p>

            </div>


        </div>
    )
}

Body.propTypes = {
    model: PropTypes.string,
    switchClass: PropTypes.string,
    keyLayout: PropTypes.string,
    backlight: PropTypes.string,
    connectivity: PropTypes.string,
    dimension: PropTypes.string,
    weight: PropTypes.string,
    cableLenght: PropTypes.string,
    additional: PropTypes.string,
    warranty: PropTypes.number
}

Body.defaultProps ={
    model: "KB X1000",
    switchType:"Cherry MX Red",
    switchClass: "(Mechanical)",
    keyLayout: "Full-size (104 keys)",
    backlight: "Wired (USB 2.0)",
    connectivity: "Wired (USB 2.0)",
    dimension: "440 mm x 135 mm x 35 mm",
    weight: "1.2 kg",
    cableLenght: "1.8 meters",
    additional: "Anti-ghosting, N-key rollover, dedicated media control",
    warranty: 2
}