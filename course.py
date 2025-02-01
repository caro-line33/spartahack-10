class Course:
  def __init__(Code, Number, Credits, Prereqs, Semesters):
    # initialize parameters
    Course.code = str(Code)
    Course.number = int(Number)
    Course.credits = int(Credits)
    Course.prereqs = list(Prereqs)
    Course.semesters = list(Semesters)