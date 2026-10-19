// Mirrors `PatientWorkspaceGroupProps` from `@openmrs/esm-patient-common-lib`. We
// re-declare it locally because the published lib ships raw .ts source (no .d.ts),
// which forces our strict tsconfig to type-check 40+ lib files when imported.
export interface PatientWorkspaceGroupProps {
  patient?: fhir.Patient;
  patientUuid?: string;
  visitContext?: unknown;
  mutateVisitContext?: () => void;
}

export interface PatientChartWorkspaceActionButtonProps {
  groupProps: PatientWorkspaceGroupProps;
  workspaceProps?: AiChatWorkspaceProps | null;
}

/**
 * Props another module can pass when it launches `ai-chat-workspace`, e.g.
 * `launchWorkspace2('ai-chat-workspace', { initialQuestion, patientUuid })`.
 */
export interface AiChatWorkspaceProps {
  /** Prefills the chat input. It is never sent on its own: the clinician still presses Send. */
  initialQuestion?: string;
  /** The patient the question was asked about. A question about any other patient is dropped. */
  patientUuid?: string;
}
