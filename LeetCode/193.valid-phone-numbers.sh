#
# @lc app=leetcode id=193 lang=bash
#
# [193] Valid Phone Numbers
#
# https://leetcode.com/problems/valid-phone-numbers/description/
#
# shell
# Easy (25.01%)
# Total Accepted:    21.2K
# Total Submissions: 84.6K
# Testcase Example:  '0'
#
# Given a text file file.txt that contains list of phone numbers (one per
# line), write a one liner bash script to print all valid phone numbers.
# 
# You may assume that a valid phone number must appear in one of the following
# two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)
# 
# You may also assume each line in the text file must not contain leading or
# trailing white spaces.
# 
# Example:
# 
# Assume that file.txt has the following content:
# 
# 
# 987-123-4567
# 123 456 7890
# (123) 456-7890
# 
# 
# Your script should output the following valid phone numbers:
# 
# 
# 987-123-4567
# (123) 456-7890
# 
# 
#
# Read from the file file.txt and output all valid phone numbers to stdout.
while read line
do
  if [[ $line =~ ^[0-9]{3}'-'[0-9]{3}'-'[0-9]{4}$|^'('[0-9]{3}') '[0-9]{3}'-'[0-9]{4}$ ]]
  then  
    echo $line;
  fi
done<file.txt

# while true
# do
#     read            #read line into var: $REPLY (Bash feature)
#     #when to terminate
#     if [ ${#REPLY} -eq 0 ]
#     then
#         break;
#     fi
#     #check if valid
#     case $REPLY in
#         #for case: xxx-xxx-xxxx
#         [0-9][0-9][0-9]'-'[0-9][0-9][0-9]'-'[0-9][0-9][0-9][0-9] )
#             echo $REPLY
#             ;;
#         #for case: (xxx) xxx-xxxx
#         '('[0-9][0-9][0-9]') '[0-9][0-9][0-9]'-'[0-9][0-9][0-9][0-9] )
#             echo $REPLY
#             ;;
#     esac
# done<file.txt        #redirection 'file.txt' to stdin
