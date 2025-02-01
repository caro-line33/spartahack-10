class Course:
  def __init__(Code="ECE", Number=100, Credits=0, Prereqs="", Semesters=""):
    # initialize parameters
    Course.code = str(Code)
    Course.number = int(Number)
    Course.credits = int(Credits)
    Course.prereqs = list(Prereqs)
    Course.semesters = list(Semesters)