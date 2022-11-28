import React, { useState, useRef, useEffect, Fragment } from 'react';
import AWS from 'aws-sdk';

const Speech = (props) => {
    AWS.config.region = 'us-east-2';
    AWS.config.accessKeyId = process.env.NEXT_AWS_ACCESS_KEY_ID;
    AWS.config.secretAccessKey = process.env.NEXT_AWS_SECRET_ACCESS_KEY;

    const { voice, title } = props;
    let audioRef = useRef(null);
    const [AWSURL, setAWSURL] = useState('');

    useEffect(() => {
        speech();
    }, []);

    const speech = (e) => {
        const polly = new AWS.Polly({ apiVersion: '2016-06-10' });
        const signer = new AWS.Polly.Presigner(speechParams, polly);
        const speechParams = {
            OutputFormat: 'mp3',
            SampleRate: '16000',
            Text: voice ? voice && `Visit us at ${voice}. Thank you for calling ${voice}` : title && `Visit us at ${title}. Thank you for calling ${title}`,
            TextType: 'text',
            VoiceId: 'Matthew'
        };
        signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
            if (!error) {
                setAWSURL(url);
                audioRef.current.load();
                audioRef.current.play();
            }
        });
    };
    return (
        <Fragment>
            <audio id="audioPlayback" ref={audioRef}>
                <source id="audioSource" type="audio/mp3" src={AWSURL} />
            </audio>
        </Fragment>
    );
};

export default Speech;
