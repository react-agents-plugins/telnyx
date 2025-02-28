import React, { useEffect } from 'react';
import {
  useAgent,
} from 'react-agents';
import {
  TelnyxBotArgs,
} from '../../types';

type TelnyxProps = {
  apiKey: string;
  phoneNumber?: string;
  message: boolean;
  voice: boolean;
};

export const Telnyx: React.FC<TelnyxProps> = (props: TelnyxProps) => {
  const {
    apiKey,
    phoneNumber,
    message,
    voice,
  } = props;
  const agent = useAgent();

  useEffect(() => {
    const args: TelnyxBotArgs = {
      apiKey,
      phoneNumber,
      message,
      voice,
      agent,
    };
    const telnyxBot = agent.telnyxManager.addTelnyxBot(args);
    return () => {
      agent.telnyxManager.removeTelnyxBot(telnyxBot);
    };
  }, [
    apiKey,
    phoneNumber,
    message,
    voice,
  ]);

  return null;
};