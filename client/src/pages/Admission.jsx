import React from 'react';
import ApplicationProcess from './ApplicationProcess';
function Admission() {
  const removeUndergradStepTitles = [
    'JAMB Registration',
    'JAMB UTME Examination',
    'Post-UTME Screening'
  ];
  const removeImportantDateEvents = [
    'JAMB Registration Ends',
    'Post-UTME Screening'
  ];
  const applicationFees = {
    undergraduate: '₦2,000',
    masters: '₦25,000',
    phd: '₦25,000'
  };
  const paymentMethods = ['Online Payment'];
  return (
    <ApplicationProcess
      theme="green"
      removeUndergradStepTitles={removeUndergradStepTitles}
      removeImportantDateEvents={removeImportantDateEvents}
      applicationFees={applicationFees}
      paymentMethods={paymentMethods}
    />
  );
}
export default Admission;
