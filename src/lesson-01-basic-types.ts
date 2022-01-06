export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    /** @type {number} members - value: 11 */
    members: number = 11;

    /** @type {number} baseColor - value: a3f4d5 (hexadecimal number) */
    baseColor: number = parseInt('a3f4d5', 16);

    /** @type {number} role - value: 1001 (binary number) */
    role: number = parseInt('1001', 2);

    /** @type {number} systemID - value: 7700 (octal number) */
    systemID: number = parseInt('7700', 8);

    /** @type {number} average - value: 4.5 */
    average: number = 4.5;

    /** @type {string} adminName - value: szabadon választott szöveg */
    adminName: string = 'Amy Namey';

    /** @type {string} sumPoints - value: 'Members have <this.members és a this.average szorzata> points' (template string) */
    sumPoints: string = `Members have ${this.members*this.average} points`;


}
