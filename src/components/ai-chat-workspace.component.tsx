import React from 'react';
import { useTranslation } from 'react-i18next';
import { Workspace2 } from '@openmrs/esm-framework';
import { type PatientChartWorkspaceActionButtonProps } from '../types';
import AiChatContent from './ai-chat-content.component';

const AiChatWorkspace: React.FC<PatientChartWorkspaceActionButtonProps> = ({
  groupProps: { patientUuid },
  workspaceProps,
}) => {
  const { t } = useTranslation();
  // A question asked about another patient must never be offered in this patient's chat.
  const isForThisPatient = !workspaceProps?.patientUuid || workspaceProps.patientUuid === patientUuid;

  return (
    <Workspace2 title={t('aiChartSearch', 'AI Chart Search')} hasUnsavedChanges={false}>
      <AiChatContent
        mode="workspace"
        patientUuid={patientUuid}
        initialQuestion={isForThisPatient ? workspaceProps?.initialQuestion : undefined}
      />
    </Workspace2>
  );
};

export default AiChatWorkspace;
