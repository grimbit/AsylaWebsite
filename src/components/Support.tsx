import React from 'react';
import { SupportDotFrame, RuleFrame, RuleText, Inline } from './Support.styles';
import { FaDonate, FaStar } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { GiPayMoney } from 'react-icons/gi';
export const ListSupport = () => {
  return (
    <RuleFrame>
      <Inline>
        <SupportDotFrame>
          <FaDonate />
        </SupportDotFrame>{' '}
        <RuleText href="https://streamlabs.com/asylatv/tip">Donate</RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>
          <IoFastFood />
        </SupportDotFrame>{' '}
        <RuleText href="https://treatstream.com/t/treat/asylatv">
          Send Food
        </RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>
          <FaStar />
        </SupportDotFrame>{' '}
        <RuleText href="https://vtubie.com/asyla/">Like on Vtube</RuleText>
      </Inline>
      <Inline>
        <SupportDotFrame>
          <GiPayMoney />
        </SupportDotFrame>{' '}
        <RuleText href="https://www.xerces.org/">Recommended Charity</RuleText>
      </Inline>
    </RuleFrame>
  );
};
