import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Services from "../components/Services";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Services">
                <Services/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews