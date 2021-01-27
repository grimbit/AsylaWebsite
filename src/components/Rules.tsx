import React from 'react';
import { RuleDotFrame, RuleFrame, RuleText } from './Rules.styles';

const Rules = [
  'No Lewd Comments',
  'No sexist/homophobic/racist comments',
  'No Advertising',
  'No Begging',
  'Do not abuse mentioning the broadcaster',
  'Keep things PG-13'
];

export const ListRules = () => {
  return (
    <RuleFrame>
      {Rules.map((x) => (
        <RuleText key={Rules.indexOf(x)}>
          <RuleDotFrame>▲</RuleDotFrame> {x}
        </RuleText>
      ))}
    </RuleFrame>
  );
};
