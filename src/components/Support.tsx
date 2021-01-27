import React from 'react';
import { SupportDotFrame, RuleFrame, RuleText, Inline } from './Support.styles';

export const ListSupport = () => {
  return (
    <RuleFrame>
      <Inline>
        <SupportDotFrame>{'\u2B24'}</SupportDotFrame>{' '}
        <RuleText href="https://streamlabs.com/asylatv/tip">Donate</RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>{'\u2B24'}</SupportDotFrame>{' '}
        <RuleText href="https://treatstream.com/t/treat/asylatv">
          Send Food
        </RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>{'\u2B24'}</SupportDotFrame>{' '}
        <RuleText href="https://vtubie.com/asyla/">Like on Vtube</RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>{'\u2B24'}</SupportDotFrame>{' '}
        <RuleText href="https://www.xerces.org/">Recommended Charity</RuleText>
      </Inline>
    </RuleFrame>
  );
};
