export function isObjectEmpty(obj) {
    for (const key in obj) {
      if (obj[key]=="") {
        return false; // If any value is empty, return false
      }
    }
    return true; // All values are non-empty, return true
  }