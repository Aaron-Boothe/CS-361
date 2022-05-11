#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char const *argv[])
{
	while(1) {
		char text[4];
		// Adds terminating null
		text[3] = '\0';
	
		FILE * fp;
	
		// Opens file
		fp = fopen("prng-service.txt", "r");
	
		// Reads file
		int index = 0;
		while(1) {
			if (index > 2)
			{
				break;
			}
	
			text[index] = fgetc(fp);
			if(feof(fp)) { 
				break;
			}
			index++;
		}
		text[3] = '\0';
		// printf("\nindex: %d, text: %s\n", index, text);
		fclose(fp);
	
		// Validation
		if (index == 3 && strstr(text, "run"))
		{
			// printf("index: %d, text: %s\n", index, text);
			time_t t;
			srand((unsigned) time(&t));
			// Randomly generates a number from 1-4
			int randX = (rand() % 4) + 1;
	
			// Truncates file
			fp = fopen("prng-service.txt", "w");
			fprintf(fp, "%d", randX);
			fclose(fp);
		}
		else {
			sleep(3);
		}
	}
	return 0;
}