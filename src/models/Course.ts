export interface ICourseResponse {
  id: number,
  isPreviousCourse: number,
  name: string,
  parentCourse: number | null,
  year: number,
}

export interface ICourse {
  id: number,
  isPreviousCourse: boolean,
  name: string,
  parent?: number | null ,
  year: number,
}

export class Course {
  private course!: ICourse

  constructor(course: ICourse){
    this.course = course
  }

  get json(): ICourse {
    return this.course
  }
}

export class CourseAdapter extends Course {
  constructor(course: ICourseResponse){
    super({
      id: course.id,
      name: course.name,
      parent: course.parentCourse,
      year: course.year,
      isPreviousCourse: course.isPreviousCourse !== 0,
    })
  }
}