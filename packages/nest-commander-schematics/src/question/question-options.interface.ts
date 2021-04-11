import { Path } from '@angular-devkit/core';

export interface QuestionOptions {
  name: string;
  spec: boolean;
  flat: boolean;
  sourceRoot: string;
  path?: string | Path;
  type?: string;
  metadata?: string;
  module?: Path | null;
}
