#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char const *argv[])
{
	while(1) {
		char text[2];
		// Adds terminating null
		text[1] = '\0';
	
		FILE * fp;
	
		// Opens file
		fp = fopen("image-service.txt", "r");
	
		// Reads file
		int index = 0;
		while(1) {
			if (index > 0)
			{
				break;
			}

			if (index == 0)
			{
				text[0] = fgetc(fp);
			}
			
			if(feof(fp)) { 
				break;
			}
			index++;
		}
		text[1] = '\0';
		fclose(fp);
	
		// Validation
		if (index == 1 && isdigit(text[0]))
		{
			// Truncates file
			fp = fopen ("image-service.txt", "w");
			// Writes path to file
			fprintf(fp, "./images/%d.jpg", atoi(text));
			fclose(fp);
		}
		else {
			sleep(3);
		}
	}
	return 0;
}