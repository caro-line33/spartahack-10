
def open_file(prompt_str):
    """
    prompt user for a file until correct answer is input
    show error message if incorrect file is entered & fp_bool is False
    return a file pointer
    straight up borrowed from 231
    """
    fp_bool = False  # boolean variable for while loop
    while not fp_bool:  # while not true
        try:
            fp = open(prompt_str, "r", encoding="utf-8")
            fp_bool = True  # if successful, turn bool to true to exit loop
        except FileNotFoundError:
            print("\nFile not Found. Please try again!")
            prompt_str = input("\nEnter cards file name: ")
    return fp

