/**
 * Represents the different supported view types in instructor sessions result page.
 */
export enum InstructorSessionResultViewType {

  /**
   * Organize responses by questions.
   */
  QUESTION,

  /**
   * Organize responses by giver name, then recipient name, then questions.
   */
  GRQ,

  /**
   * Organize responses by recipient name, then giver name, then questions.
   */
  RGQ,

  /**
   * Organize responses by giver name, then questions.
   */
  GQR,

  /**
   * Organize responses by recipient name, then questions.
   */
  RQG,

}
