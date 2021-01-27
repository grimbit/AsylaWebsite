import React from 'react';
import { RuleDotFrame, RuleFrame, RuleText } from './Rules.styles';

export const Rules = () => {
  const Rules = [
    'No Lewd Comments',
    'No sexist/homophobic/racist comments',
    'No Advertising',
    'No Begging',
    'Do not abuse mentioning the broadcaster',
    'Keep things PG-13'
  ];

  const ListRules = () => {
    return Rules.map((x) => (
      <RuleText key={Rules.indexOf(x)}>
        <RuleDotFrame>{'\u2B24'}</RuleDotFrame>
        {x}
      </RuleText>
    ));
  };

  return <RuleFrame>{ListRules()}</RuleFrame>;
};
