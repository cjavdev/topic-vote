/* */ 
'use strict';
var __extends = (this && this.__extends) || function(d, b) {
  for (var p in b)
    if (b.hasOwnProperty(p))
      d[p] = b[p];
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('../../facade/exceptions');
var ExpressionChangedAfterItHasBeenCheckedException = (function(_super) {
  __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
  function ExpressionChangedAfterItHasBeenCheckedException(exp, oldValue, currValue, context) {
    _super.call(this, ("Expression '" + exp + "' has changed after it was checked. ") + ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
  }
  return ExpressionChangedAfterItHasBeenCheckedException;
})(exceptions_1.BaseException);
exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
var ChangeDetectionError = (function(_super) {
  __extends(ChangeDetectionError, _super);
  function ChangeDetectionError(exp, originalException, originalStack, context) {
    _super.call(this, originalException + " in [" + exp + "]", originalException, originalStack, context);
    this.location = exp;
  }
  return ChangeDetectionError;
})(exceptions_1.WrappedException);
exports.ChangeDetectionError = ChangeDetectionError;
var DehydratedException = (function(_super) {
  __extends(DehydratedException, _super);
  function DehydratedException() {
    _super.call(this, 'Attempt to use a dehydrated detector.');
  }
  return DehydratedException;
})(exceptions_1.BaseException);
exports.DehydratedException = DehydratedException;
var EventEvaluationError = (function(_super) {
  __extends(EventEvaluationError, _super);
  function EventEvaluationError(eventName, originalException, originalStack, context) {
    _super.call(this, "Error during evaluation of \"" + eventName + "\"", originalException, originalStack, context);
  }
  return EventEvaluationError;
})(exceptions_1.WrappedException);
exports.EventEvaluationError = EventEvaluationError;
var EventEvaluationErrorContext = (function() {
  function EventEvaluationErrorContext(element, componentElement, context, locals, injector) {
    this.element = element;
    this.componentElement = componentElement;
    this.context = context;
    this.locals = locals;
    this.injector = injector;
  }
  return EventEvaluationErrorContext;
})();
exports.EventEvaluationErrorContext = EventEvaluationErrorContext;
