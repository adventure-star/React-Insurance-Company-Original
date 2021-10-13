import React from 'react'
import Button from './Button'
import { Amplitude } from "@amplitude/react-amplitude";

export default function AmplitudeButton(props) {
    return (
        <Amplitude
            eventProperties={inheritedProps => ({
                ...inheritedProps,
                //   scope: [...inheritedProps.scope, "square"]
            })}
        >
            {({ logEvent }) => (
                <Button className={props.className} bg={props.bg} text={props.text} action={(e) => {logEvent(props.event?? props.text); props.action(e)}} special={props.special} />
            )}
        </Amplitude>
    );
}