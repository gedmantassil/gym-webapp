import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  isHeadHighlighted: boolean = false;
  isSixPackHighlighted: boolean = false;
  isBicepHighlighted: boolean = false;
  isTrapsHighlighted: boolean = false;
  isLegsHighlighted: boolean= false;
  isChestHighlighted: boolean= false;
  isShoulderHighlighted: boolean= false;
  isMidBackHighlighted: boolean= false;
  isHamstringHighlighted: boolean= false;
  isHipHighlighted: boolean= false;
  isLowerLatHighlighted: boolean= false;
  isQuadHighlighted: boolean= false;
  isForeArmHighlighted: boolean= false;
  isTricepHighlighted: boolean= false;
  isLowerBackHighlighted: boolean= false;
  isUpperLatsHighlighted: boolean= false;
  isCalvesHighlighted: boolean= false;
  isAbsHighlighted: boolean= false;
  isObliquesHighlighted: boolean= false;



  highlight(part: string) {
    if (part === 'head') {
      this.isHeadHighlighted = true;
    } else if (part === 'six-pack') {
      this.isSixPackHighlighted = true;
    }
    else if (part === 'bicep') {
      this.isBicepHighlighted = true;
    }
    else if (part === 'traps') {
      this.isTrapsHighlighted = true;
    }

    else if (part === 'legs') {
      this.isLegsHighlighted = true;
    }
    else if (part === 'chest') {
      this.isChestHighlighted = true;
    }
    else if (part === 'shoulder') {
      this.isShoulderHighlighted = true;
    }
    else if (part === 'midback') {
      this.isMidBackHighlighted = true;
    }
    else if (part === 'hamstring') {
      this.isHamstringHighlighted = true;
    }
    else if (part === 'hip') {
      this.isHipHighlighted = true;
    }
    else if (part === 'lower-lat') {
      this.isLowerLatHighlighted = true;
    }
    else if (part === 'quad') {
      this.isQuadHighlighted = true;
    }
    else if (part === 'forearm') {
      this.isForeArmHighlighted = true;
    }
    else if (part === 'tricep') {
      this.isTricepHighlighted = true;
    }
    else if (part === 'lowerback') {
      this.isLowerBackHighlighted = true;
    }
    else if (part === 'upperlat') {
      this.isUpperLatsHighlighted = true;
    }
    else if (part === 'calve') {
      this.isCalvesHighlighted = true;
    }
    else if (part === 'abs') {
      this.isAbsHighlighted = true;
    }
    else if (part === 'oblique') {
      this.isObliquesHighlighted = true;
    }
  }

  unhighlight(part: string) {
    if (part === 'head') {
      this.isHeadHighlighted = false;
    } else if (part === 'six-pack') {
      this.isSixPackHighlighted = false;
    }
    else if (part === 'bicep') {
      this.isBicepHighlighted = false;
    }
    else if (part === 'traps') {
      this.isTrapsHighlighted = false;
    }
    else if (part === 'legs') {
      this.isLegsHighlighted = false;
    }
    else if (part === 'chest') {
      this.isChestHighlighted = false;
    }
    else if (part === 'shoulder') {
      this.isShoulderHighlighted = false;
    }
    else if (part === 'midback') {
      this.isMidBackHighlighted = false;
    }
    else if (part === 'hamstring') {
      this.isHamstringHighlighted = false;
    }
    else if (part === 'hip') {
      this.isHipHighlighted = false;
    }
    else if (part === 'lower-lat') {
      this.isLowerLatHighlighted= false;
    }
    else if (part === 'quad') {
      this.isQuadHighlighted= false;
    }
    else if (part === 'forearm') {
      this.isForeArmHighlighted= false;
    }
    else if (part === 'tricep') {
      this.isTricepHighlighted= false;
    }
    else if (part === 'lowerback') {
      this.isLowerBackHighlighted= false;
    }
    else if (part === 'upperlat') {
      this.isUpperLatsHighlighted= false;
    }
    else if (part === 'calve') {
      this.isCalvesHighlighted= false;
    }
    else if (part === 'abs') {
      this.isAbsHighlighted= false;
    }
    else if (part === 'oblique') {
      this.isObliquesHighlighted= false;
    }
  }

  onMuscleGroupClick(part: string) {
    console.log(`Muscle Group Clicked: ${part}`);
    // Additional logic for clicking the muscle group
  }
}
