
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

def read_card_data(fp):
    """
    Takes a file pointer (fp parameter) from open_file
    creates a reader file to cycle through csv
    creates a list
    for each line in reader file, add line as a tuple
    for each element, convert to correct parameters (char length, type, tup)
    returns a list of tuples, with each tuple representing a card in dataset
    """
    reader_file = csv.reader(fp)
    next(reader_file)
    list_of_tup = []
    card_count = 0  # variable to cycle through index # of the list

    for card in reader_file:
        list_of_tup += [card[0:7]]  # only interested in first 6 elements
    for element in list_of_tup:  # conversion loop
        list_of_tup[card_count][1] = list_of_tup[card_count][1][:45]
        list_of_tup[card_count][6] = float(list_of_tup[card_count][6])
        list_of_tup[card_count] = tuple(element)
        card_count += 1
    list_of_tup = sorted(list_of_tup, key=itemgetter(6,1))
    return list_of_tup