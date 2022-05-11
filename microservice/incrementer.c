#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char const *argv[])
{
	// keeps track of current value to dec/inc
	int currVal = 0;

	//  1 = increment mode, -1 = decrement mode
	int mode = 0;
	while(1) {
		while(1) {
			// holds file input
			char text[65];

			// holds token array
			char token[3][30];
			char* tok;

			// Opens file
			FILE * fp;
			fp = fopen("incOutput.txt", "r");
			fgets(text, sizeof(text), fp);
			fclose(fp);

			// checks if there's a equal sign
			// executes if equal sign found
			if (text[3] == 61) {
				// copies mode to token[0] 
	   			tok = strtok(text, "=");
				strcpy(token[0], tok);

				// copies new value to token[1]
				tok = strtok(NULL, "=");
				strcpy(token[1], tok);

				// executes if 'inc' is used
				if (!strcmp(token[0], "inc")) {
					mode = 1;
				}
				// assumes 'dec' is used otherwise
				else {
					mode = -1;
				}

				// makes currVal equal to new value
				currVal = atoi(token[1]);
	   		}
	   		// executes if no equal sign
	   		else {
	   			// executes if 'inc' is used
				if (!strcmp(text, "inc")) {
					mode = 1;
				}
				// assumes 'dec' is used otherwise
				else if (!strcmp(text, "sub")) {
					mode = -1;
				}
				else {
					sleep(3);
					break;
				}
	   		}

	   		// performs arithmetic
	   		currVal += mode;

	   		fp = fopen("incOutput.txt", "w");
			fprintf(fp, "%d", currVal);
			fclose(fp);

			// break;
		}
	}
	return 0;
}