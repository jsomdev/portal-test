export interface OdataException {
  error: ODataError;
}

export interface ODataError {
  code: string;
  message: string;
  details: string[];
  innerError: ODataInnerError;
}

export interface ODataInnerError {
  type: string;
  message: string;
  stacktrace: string;
}
