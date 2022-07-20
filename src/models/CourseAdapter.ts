export class CourseAdapter {
  constructor(public id: number,
              public name: string,
              public parentCourseId: number,
              public year: number,
              public isPreviousCourse: number,
              public createdAt: string,
              public updatedAt: string
  ) {
  }
}
