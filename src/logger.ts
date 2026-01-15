/**
 * Logger utility for styled console output
 * Provides consistent logging format across the application
 */

export class Logger {
  private static readonly STYLES = {
    info: 'color: #666; font-size: 11px;',
    infoValue: 'color: #999; font-size: 11px; font-family: monospace;',
    error: 'color: #f00; font-size: 11px; font-weight: bold;',
    errorValue: 'color: #f00; font-size: 11px;',
    warning: 'color: #ff9800; font-size: 11px;',
    warningValue: 'color: #ff9800; font-size: 11px;',
    success: 'color: #4caf50; font-size: 11px;',
  };

  static info(message: string, ...values: string[]): void {
    const args: any[] = [message, this.STYLES.info];
    values.forEach((value, index) => {
      args.push(value, index % 2 === 0 ? this.STYLES.infoValue : this.STYLES.info);
    });
    console.log(...args);
  }

  static error(message: string, value?: string): void {
    if (value) {
      console.error(`%c${message}%c${value}`, this.STYLES.error, this.STYLES.errorValue);
    } else {
      console.error(`%c${message}`, this.STYLES.error);
    }
  }

  static warn(message: string, value?: string): void {
    if (value) {
      console.warn(`%c${message}%c${value}`, this.STYLES.warning, this.STYLES.warningValue);
    } else {
      console.warn(`%c${message}`, this.STYLES.warning);
    }
  }

  static success(message: string): void {
    console.log(`%c${message}`, this.STYLES.success);
  }

  static data(label: string, data: any): void {
    console.log(
      `%c  ${label}: %c${JSON.stringify(data, null, 2)}`,
      this.STYLES.info,
      this.STYLES.infoValue
    );
  }

  static serviceCall(domain: string, service: string, withResponse: boolean = false): void {
    this.info(
      '  Calling service: ',
      `${domain}.${service}${withResponse ? ' (with return_response)' : ''}`
    );
  }

  static serviceData(data: Record<string, any>): void {
    this.data('Service data', data);
  }

  static serviceResponse(response: any): void {
    this.data('Raw Service Response', response);
  }

  static serviceError(error: any): void {
    console.error(
      '%c  Service Error Details: %c' + JSON.stringify(error, Object.getOwnPropertyNames(error), 2),
      this.STYLES.info,
      this.STYLES.errorValue
    );
  }
}
